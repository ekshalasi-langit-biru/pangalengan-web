const useSearchFilter = (items, keyword, keys = []) => {
  if (!keyword) return items;

  return items.filter((item) =>
    keys.some((key) =>
      item[key]?.toLowerCase().includes(keyword.toLowerCase())
    )
  );
};

export default useSearchFilter;