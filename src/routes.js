const { postBooks, getAllBooks, getBookByid, editBook, deleteBook } = require("./handler");

const routes = [
	{
		method: "POST",
		path: "/books",
		handler: postBooks,
	},

	{
		method: "GET",
		path: "/books",
		handler: getAllBooks,
	},

	{
		method: "GET",
		path: "/books/{bookId}",
		handler: getBookByid,
	},

	{
		method: "PUT",
		path: "/books/{bookId}",
		handler: editBook,
	},

	{
		method: "DELETE",
		path: "/books/{bookId}",
		handler: deleteBook,
	},
];

module.exports = routes;