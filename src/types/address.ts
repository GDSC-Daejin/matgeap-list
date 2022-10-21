export type Address = {
  address_name: string; //주소
  category_group_code: string; //카테고리 그룹 코드
  category_group_name: string; //카테고리 그룹 이름
  category_name: string; //카테고리 이름
  distance: string; //거리
  id: string; //장소 id
  phone: string; //전화번호
  place_name: string; //장소명
  place_url: string; //장소 상세페이지 url
  road_address_name: string; //도로명 주소
  x: number; //경도
  y: number; //위도
};
export interface ApplyPlace extends Address {
  description: string;
  displayName: string;
  uid: string;
}
