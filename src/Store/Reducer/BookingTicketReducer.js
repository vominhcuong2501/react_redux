const DEFAULT_STATE = {
  mangGheDangDat: [],
  mangGheDaDat: []
};

export const BookingTicketReducer = (
  state = DEFAULT_STATE,
  { type, payload }
) => {
  switch (type) {
    case "DAT_GHE": {
      let mangGheDangDatUpdate = [...state.mangGheDangDat];
      let index = mangGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === payload.soGhe
      );
      if (index !== -1) {
        // khi ng dùng click ghế đã có trong mảng thì sẽ remove ghế đó đi
        mangGheDangDatUpdate.splice(index, 1);
      } else {
        // khi ng dùng click ghế chưa có trong mảng thì sẽ push ghế đó vào
        mangGheDangDatUpdate.push(payload);
      }
      // cập nhật lại state để render lại giao diện
      state.mangGheDangDat = mangGheDangDatUpdate;
      return { ...state };
    }

    case "XOA_GHE": {
      let mangGheDangDatUpdate = [...state.mangGheDangDat];
      let index = mangGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === payload.soGhe
      );
      mangGheDangDatUpdate.splice(index, 1);
      state.mangGheDangDat = mangGheDangDatUpdate;
      return { ...state };
    }

    // case 'DAT_VE': {
    // let mangGheDaDatUpdate = payload;
    // for(let i =0; i < mangGheDaDatUpdate.length; i++) {
    //     if(!mangGheDaDatUpdate[i].daDat) {
    //         mangGheDaDatUpdate[i].daDat = true
    //     }
    // }
    //     state.mangGheDaDat = mangGheDaDatUpdate;
    //     return {...state}
    // }
    default:
      return { ...state };
  }
};
