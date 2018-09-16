// 초기값 설정
var BASE_URL = '/api'; 
export default {
  // 페이징 처리될 사이즈
  PAGESIZE: 5,
  // 게시글 등록 : post
  CREATE_POSTING: BASE_URL + '/posting',
  // 전체 게시글 fetch : get
  READ_POSTINGS_ALL: BASE_URL + '/posting',
  // 게시글 한건 상세 fetch :get
  READ_POSTING: BASE_URL + '/posting',
  // 게시글 변경 : put
  UPDATE_POSTING: BASE_URL + '/posting',
  // 게시글 삭제 : delete
  DELETE_POSTING: BASE_URL + '/posting'
};