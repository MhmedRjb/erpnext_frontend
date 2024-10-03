const colorMap = {
	Accounting: 'bg-white',
}

export const getColor = (title) => {
	return colorMap[title] || 'bg-white'
}

const defaultUrl = '/app/home'

const urlMap = {
	Build: 'app/Build',
}
export const getUrl = (title) => {
	return `/app/${title.toLowerCase().replace(/ /g, '-')}`
}
