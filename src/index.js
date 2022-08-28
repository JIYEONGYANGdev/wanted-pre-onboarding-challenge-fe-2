/**
 * 필요한 데이터를 모두 모델링한다.
 * @typedef toDoItem
 * @type {Object}
 * @property {string} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} completed - 완료여부
 * @property {string} category - 카테고리
 * @property {string[]} [tags] - 태그들
 */

/** @type {Array<toDoItem>} */
const toDoList = [];

/**
 * 할 일을 추가할 수 있다.
 * 내용 없이 추가할 수 없다.
 * @param {string} content - 내용
 * @param {string} category - 카테고리
 * @param {string[]} [tags] - 태그들
 */
const createTodo = (content, category, tags) => {};

/**
 * 모든 할 일을 조회할 수 있다.
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @param {string} [id] - 아이디
 * @returns {Array<todoData> | todoData} - 데이터
 */
const readTodo = (id) => {};

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 * @param {string} id - 아이디
 * @param {number} [tagIndex] - 태그 위치
 */
const updateTodo = (id, tagIndex) => {};

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * 모든 할 일을 제거할 수 있다.
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {string} [id] - 아이디
 * @param {number} [tagIndex] - 태그 위치
 */
const deleteTodo = (id, tagIndex) => {};