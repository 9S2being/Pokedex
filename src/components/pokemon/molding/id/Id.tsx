export const formatId = (id: number) => {
    const paddedId = `0000${id}`.slice(-4);
    return `#${paddedId}`;
};