import create from "zustand";

const useGlobalState = create((set) => ({
  loadingFooter: false,
  fromPage: 1,

  setLoadingFooter: (data) =>
    set((state) =>
      Object.assign({}, state, {
        loadingFooter: data,
      })
    ),
  setFromPage: (data) =>
    set((state) =>
      Object.assign({}, state, {
        fromPage: data,
      })
    ),
}));

export { useGlobalState };
