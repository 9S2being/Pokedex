//Aplica '#XXX' ao ID para torná-lo mais semelhante à página de referência
export const formatId = (id: number) => {
    const paddedId = `000${id}`.slice(-3);
    return `#${paddedId}`;
};
