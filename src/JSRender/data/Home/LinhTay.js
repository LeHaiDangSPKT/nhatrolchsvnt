import NhaTroTrong from "../../../img/Street/NhaTroTrong.jpg";

function LinhTay() {
  return (LinhTay = [
    {
      img_phong: {
        img1: NhaTroTrong,
        img2: NhaTroTrong,
        img3: NhaTroTrong,
      },
      address: "Dương Văn Cam, Khu Phố 6, Linh Tây",
      map: "  https://goo.gl/maps/UACqCXCTHPy2kQEF8  ",
      distance: 2.4,
      info: {
        giaphong: 2000000,
        dien: "",
        nuoc: "",
        xe: "",
        wifi: "",
        maylanh: "",
        rac: "",
        description: {
          mt0: "- Loại phòng: Nhà nguyên căn",
          mt1: "- Diện tích phòng: 12m2",
          mt2: "- Có thể ở được 2 người",
          mt3: "- Để xe trong nhà",
          mt4: "- Giờ giấc: 6h00-23h00",
        },
      },
      name_chu: "Chú Nguyên",
      phone_chu: "0762129051",
      state: true,
    },
  ]);
}

export default LinhTay;
