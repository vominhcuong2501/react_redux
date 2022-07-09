const DEFAULT_STATE = {
  selectedType: "topclothes",
  model: {
    topclothes: "/images/allbody/bikini_bra.png",
    botclothes: "/images/allbody/bikini_pants.png",
    shoes: "/images/shoes/shoes2.png",
    handbags: "/images/handbags/handbag2.png",
    necklaces: "/images/necklaces/necklace2.png",
    hairstyle: "/images/hairstyle/hairstyle2.png",
    background: "/images/background/background2.jpg",
  },
};

export const thuDoReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case "SET_SELECTED_TYPE":
      state.selectedType = payload;
      return { ...state };

    case "CHANGE_CLOTHES":
      let newModel = { ...state.model };
      const { type, imgSrc_png } = payload;
      newModel[type] = imgSrc_png;
      state.model = newModel;
      return { ...state };
      

    default:
      return { ...state };
  }
};
