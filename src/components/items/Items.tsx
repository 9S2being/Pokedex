/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Typography } from "@mui/material";

export function ItemList() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/item?limit=954");
        const itemList = response.data.results;
        const itemDetailsPromises = itemList.map((item: any) => axios.get(item.url));
        const itemDetailsResponses = await Promise.all(itemDetailsPromises);
        const itemsWithDetails = itemDetailsResponses.map((response: any) => response.data);
        setItems(itemsWithDetails);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <Box style={{ backgroundColor: '#f0f0f0', padding: '20px 0' }}>
      <Container maxWidth="lg" style={{ backgroundColor: '#FFFFFF', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px' }}>
        <Typography variant="h4" style={{ fontWeight: 'bold', borderBottom: '2px solid #000', marginBottom: '20px', paddingBottom: '10px' }}>
          Items
        </Typography>

        {/* Lista de itens */}
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          {items.map((item: any, index: number) => (
            <Box key={index} m={2} style={{ width: '30%', borderRadius: '5px', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
              <Box style={{ padding: '10px', textAlign: 'center' }}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.name}.png`} alt={item.name} style={{ height: '100px', width: '100px', marginBottom: '10px' }} />
                <Typography variant="h6" style={{ fontWeight: 'bold', marginBottom: '5px' }}>{item.name}</Typography>
                {item.category && (
                  <Typography style={{ fontSize: '14px', color: '#888', marginBottom: '5px' }}>Category: {item.category.name}</Typography>
                )}
                {item.effect_entries && item.effect_entries.length > 0 && (
                  <Typography style={{ fontSize: '14px', color: '#888' }}>Effect: <br /> {item.effect_entries[0].effect}</Typography>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
