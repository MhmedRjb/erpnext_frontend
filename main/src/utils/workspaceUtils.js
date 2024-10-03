const colorMap = {
	Accounting: 'bg-gray-50',
}


export const getColor = (title) => {
	return colorMap[title] || 'bg-gray-50'
}
const svgMap = {
	Accounting: 'assets/images/Accounting.svg',
	Assets: 'assets/images/Assets.svg',
	Build: 'https://img.icons8.com/?size=100&id=rZkxuhikMLfr&format=png&color=000000',
	Buying: 'https://img.icons8.com/?size=100&id=13012&format=png&color=000000',
	CRM: 'https://img.icons8.com/?size=100&id=rJl8pTEO0lyZ&format=png&color=000000',
	'Financial Reports': 'https://img.icons8.com/?size=100&id=22462&format=png&color=000000',
	Home: 'https://img.icons8.com/?size=100&id=12229&format=png&color=000000',
	Integrations: 'https://img.icons8.com/?size=100&id=24459&format=png&color=000000',
	Manufacturing: 'https://img.icons8.com/?size=100&id=108785&format=png&color=000000',
	Payables: 'https://img.icons8.com/?size=100&id=32747&format=png&color=000000',
	Projects: 'https://img.icons8.com/?size=100&id=104230&format=png&color=000000',
	Quality: 'https://img.icons8.com/?size=100&id=20539&format=png&color=000000',
	Receivables: 'https://img.icons8.com/?size=100&id=13017&format=png&color=000000',
	Selling: 'https://img.icons8.com/?size=100&id=v2btWkQ6FQYW&format=png&color=000000',
	Settings: 'https://img.icons8.com/?size=100&id=22998&format=png&color=000000',
	Stock: 'https://img.icons8.com/?size=100&id=VWrzCw0rvxVx&format=png&color=000000',
	Support: 'https://img.icons8.com/?size=100&id=13556&format=png&color=000000',
	Tools: 'https://img.icons8.com/?size=100&id=85740&format=png&color=000000',
	Users: 'https://img.icons8.com/?size=100&id=11901&format=png&color=000000',
	Website: 'https://img.icons8.com/?size=100&id=102562&format=png&color=000000', 
}

const defaultSvgUrl = new URL('@/assets/images/Accounting.svg', import.meta.url).href

export const getSvgData = (title) => {
	return svgMap[title] || defaultSvgUrl
}

const defaultUrl = '/app/home'

const urlMap = {
	Build: 'app/Build',
}
export const getUrl = (title) => {
	return `/app/${title.toLowerCase().replace(/ /g, '-')}`
}

