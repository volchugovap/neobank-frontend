function isHtml(text: string) {
	return /<[^>]+>/.test(text);
}

function isMarkdown(text: string) {
	const mdPatterns = [
		/^#{1,6}\s+\S+/m, // заголовок: # Заголовок
		/^\s*[\*\-+]\s+\S+/m, // маркированный список: * пункт
		/^\s*\d+\.\s+\S+/m, // нумерованный список: 1. пункт
		/\[[^\]]+\]\([^\)]+\)/, // ссылка: [текст](url)
		/\*\*[^*]+\*\*/, // жирный: **текст**
		/\*[^*]+\*/, // курсив: *текст*
		/~~[^~]+~~/, // зачеркивание: ~~текст~~
		/`[^`]+`/, // инлайн-код: `код`
		/^\s*>{1,}\s+\S+/m, // цитата: > текст
		/^\s*---\s*$/m, // горизонтальная линия: ---
		/!\[[^\]]*\]\([^\)]+\)/, // изображение: ![alt](url)
		/^\|.+?\|.+?\|/m, // таблица (простой признак)
	];

	return mdPatterns.some((pattern) => pattern.test(text));
}

export function filterByMarkup(str: string) {
	if (!str || !str.trim()) return false;

	return isHtml(str) && isMarkdown(str);
}
