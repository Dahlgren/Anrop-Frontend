angular.module('bbcode').value('snippets', {
	"b": "<b>$1</b>", // Bolded text
	"u": "<u>$1</u>", // Underlined text
	"i": "<i>$1</i>", // Italicized text
	"s": "<s>$1</s>", // Strikethrough text
	"img": "<img class=\"img-responsive\" src=\"$1\" />", // Image without title
	"img=([^\\[\\]<>]+?)": "<img class=\"img-responsive\" src=\"$1\" alt=\"$2\" />", // Image with title
	"url": "<a href=\"$1\" target=\"_blank\" title=\"$1\">$1</a>", // Simple URL
	"url=([^\\[\\]<>]+?)": "<a href=\"$1\" target=\"_blank\" title=\"$2\">$2</a>", // URL with title
	"style": function(complete, y) { // Example of function use
		return y.toUpperCase();
	}
});
