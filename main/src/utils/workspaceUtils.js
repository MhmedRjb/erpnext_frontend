const colorMap = {
	Accounting: 'bg-teal-500',
	Assets: 'bg-red-500',
	Build: 'bg-blue-500',
	Buying: 'bg-yellow-500',
	CRM: 'bg-green-500',
	'Financial Reports': 'bg-purple-500',
	Home: 'bg-pink-500',
	Integrations: 'bg-teal-500',
	Manufacturing: 'bg-orange-500',
	Payables: 'bg-cyan-500',
	Projects: 'bg-green-500',
	Quality: 'bg-amber-500',
	Receivables: 'bg-emerald-500',
	Selling: 'bg-gray-500',
	Settings: 'bg-rose-500',
	Stock: 'bg-violet-500',
	Support: 'bg-purple-500',
	Tools: 'bg-gray-500',
	Users: 'bg-stone-500',
	Website: 'bg-red-600', // This color is already in the default palette
}


export const getColor = (title) => {
	return colorMap[title] || 'bg-teal-500'
}
const defaultSvgUrl = 'https://redpixelthemes.com/assets/images/icon-portfolio-green.svg'
const svgMap = {
	Accounting: 'https://img.icons8.com/?size=100&id=22462&format=png&color=000000',
	Assets: 'https://img.icons8.com/?size=100&id=22467&format=png&color=000000',
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

