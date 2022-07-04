const DEFAULT_STATE = {
  mangDatCuoc: [
    { ma: "keo", hinhAnh: "/ImgOanTuXi/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "/ImgOanTuXi/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "/ImgOanTuXi/bao.png", datCuoc: true },
  ],
  soBanThang: 0,
  soBanChoi: 0,
  ketQua: "You win!!!",
  computer: { ma: "bao", hinhAnh: "/ImgOanTuXi/bao.png" },
};

export const OanTuXiReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": 
      // reset mảng cược
      let mangCuocUpdate = [...state.mangDatCuoc];
      // Cách 1:
      mangCuocUpdate = mangCuocUpdate.map((item) => {
        if (item.ma === action.macuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      // Cách 2: tìm mã cược để change trạng thái đặt cược tương ứng với ma cược đó
      // let index = mangCuocUpdate.findIndex(item => item.ma === action.macuoc);
      // if(index !== -1) {
      //     mangCuocUpdate[index].datCuoc = true
      // };
      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };

    case "RAN_DOM": 
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];
      state.computer = quanCuocNgauNhien;
      return { ...state };

    case "END_GAME": {
      let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
      let computer = state.computer;
      state.soBanChoi += 1;
      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "You draw!!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "You lost!!!";
          } else {
            state.soBanThang += 1;
            state.ketQua = "You win!!!";
          }
          return { ...state };

        case "bua":
          if (computer.ma === "bua") {
            state.ketQua = "You draw!!!";
          } else if (computer.ma === "bao") {
            state.ketQua = "You lost!!!";
          } else {
            state.soBanThang += 1;
            state.ketQua = "You win!!!";
          }
          return { ...state };

        case "bao": {
          if (computer.ma === "bao") {
            state.ketQua = "You draw!!!";
          } else if (computer.ma === "keo") {
            state.ketQua = "You lost!!!";
          } else {
            state.soBanThang += 1;
            state.ketQua = "You win!!!";
          }
          return { ...state };
        }
        default:
          state.ketQua = "You win!!!";
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};
