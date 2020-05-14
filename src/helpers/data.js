import React from 'react';

export const options = [{
		value: 'wife',
		label: 'Wife'
	},
	{
		value: 'brother',
		label: 'Brother'
	},
	{
		value: 'sister',
		label: 'Sister'
	},
	{
		value: 'professional',
		label: 'Professional'
	},
];
export const cities = [
	{
		value: 'sydney',
		label: 'Sydney'
	},
	{
		value: 'albury',
		label: 'Albury'
	},
	{
		value: 'armidale',
		label: 'Armidale'
	},
	{
		value: 'bathurst',
		label: 'Bathurst'
	},
	{
		value: 'bluemountains',
		label: 'Blue Mountains'
	},
	{
		value: 'brokenhill',
		label: 'Broken Hill'
	},
	{
		value: 'campbelltown',
		label: 'Campbelltown'
	},
	{
		value: 'cessnock',
		label: 'Cessnock'
	},
	{
		value: 'dubbo',
		label: 'Dubbo'
	},
	{
		value: 'grafton',
		label: 'Grafton'
	},
	{
		value: 'goulburn',
		label: 'Goulburn'
	},
	{
		value: 'lithgow',
		label: 'Lithgow'
	},
	{
		value: 'liverpool',
		label: 'Liverpool'
	},
	{
		value: 'newcastle',
		label: 'Newcastle'
	},
	{
		value: 'orange',
		label: 'Orange'
	},
	{
		value: 'parramatta',
		label: 'Parramatta'
	},
	{
		value: 'penrith',
		label: 'Penrith'
	},
	{
		value: 'queanbeyan',
		label: 'Queanbeyan'
	},
	{
		value: 'tamworth',
		label: 'Tamworth'
	},
	{
		value: 'waggawagga',
		label: 'Wagga Wagga'
	},
	{
		value: 'wollongong',
		label: 'Wollongong'
	},
];
export const optionsGender = [{
		value: 'male',
		label: 'Male'
	},
	{
		value: 'Female',
		label: 'female'
	},
	{
		value: 'other',
		label: 'Other'
	}
];
export const userStatus = [{
		value: 'single',
		label: 'Single'
	},
	{
		value: 'married',
		label: 'Married'
	}
];
export const dashboardList = {
	link: '/',
	list: [
		{
			id: '000',
			name: 'Dashboard',
			link: '/dashboard',
			icon: <i className="zmdi zmdi-view-dashboard"></i>,
			show: <i className="zmdi zmdi-chevron-right"></i>,
		},
		{
			id: '001',
			name: 'Users',
			link: '/dashboard-users',
			icon: <i className="zmdi zmdi-accounts-list"></i>,
			show: <i className="zmdi zmdi-chevron-right"></i>,
		},
		{
			id: '002',
			name: 'Chat',
			link: '/dashboard-chart',
			icon: <i className="zmdi zmdi-comments"></i>,
			show: <i className="zmdi zmdi-chevron-right"></i>,
		},
		// {
		// 	id: '003',
		// 	name: 'Register',
		// 	link: '/dashboard-register',
		// 	icon: <i className="zmdi zmdi-account-add"></i>,
		// 	show: <i className="zmdi zmdi-chevron-right"></i>,
		// },
		{
			id: '003',
			name: 'Collection',
			link: '/dashboard-collection',
			icon: <i className="zmdi zmdi-collection-plus"></i>,
			show: <i className="zmdi zmdi-chevron-right"></i>,
		},
	],
};

export const dashboardPages = [
	'Visa Application',
	// 'Register',
	// 'The Embassy',
	'About Embassy',
	'Ambassador’s Message',
	'Diplomatic Staff',
	'Tourism',
	'About Uganda',
	'National Parks In Uganda',
	'Education',
	'Consular Services',
	'Trade & Commerce',
	'Why Invest In Uganda',
	'Banks In Uganda',
	// 'About us',
	'Banks In Uganda',
	'Admin Profiles',
];

export const navigationList = {
	link: '/',
	list: [
		{
			id: '000',
			name: 'Home',
			link: '/',
		},
		{
			id: '001',
			name: 'Visa Application',
			link: '/visa-application',
		},
		{
			id: '011',
			name: 'Register',
			link: '/register',
		},
		{
			id: '002',
			name: 'The Embassy',
			link: '/embassy',
			subLink: [
				{
					id: '001',
					name: 'About Embassy',
					link: '/about-embassy',
				},
				{
					id: '002',
					name: 'Ambassador’s Message',
					link: '/ambassador-message',
				},
				{
					id: '003',
					name: 'Diplomatic Staff',
					link: '/diplomatic-staff',
				},
			],
		},
		{
			id: '012',
			name: 'Tourism',
			link: '/tourism',
			subLink: [
				{
					id: '001',
					name: 'About Uganda',
					link: '/about-uganda',
				},
				{
					id: '002',
					name: 'National Parks In Uganda',
					link: '/national-parks-in-uganda',
				},
			],
		},
		{
			id: '004',
			name: 'Education',
			link: '/education',
			// subLink: [
			// 	{
			// 		id: '001',
			// 		name: 'Sub Education',
			// 		link: '/sub-education',
			// 	},
			// 	{
			// 		id: '002',
			// 		name: 'Double Sub Education',
			// 		link: '/sub-education',
			// 	},
			// ],
		},
		{
			id: '005',
			name: 'Consular services',
			link: '/consular-services',
		},
		{
			id: '006',
			name: 'Trade & Commerce',
			link: '/trade-commerce"',
			subLink: [
				{
					id: '001',
					name: 'Why Invest In Uganda',
					link: '/why-invest-in-uganda',
				},
				{
					id: '002',
					name: 'Banks In Uganda',
					link: '/banks-In-Uganda',
				},
			],
		},
		{
			id: '007',
			name: 'About us',
			link: '/about-us',
			subLink: [
				{
					id: '056',
					name: 'Media',
					link: '/media',
				},
				{
					id: '001',
					name: 'Admin Profiles',
					link: '/admin-profile',
				},
			],
		},
		// {
		// 	id: '008',
		// 	name: 'Admin Profiles',
		// 	link: '/admin-profile',
		// },
		// {
		// 	id: '009',
		// 	name: 'Help Chat',
		// 	link: '/help-chat',
		// },
	],
};

export const links = {
	quickLinks: [
		{
			name: 'E-visa',
			link: 'https://visas.immigration.go.ug/',
		},
		{
			name: 'NITA-U',
			link: 'https://www.nita.go.ug/',
		},
		{
			name: 'E-visa',
			link: 'https://visas.immigration.go.ug/',
		},
		{
			name: 'Uganda Tourism Board',
			link: 'http://www.visituganda.com/',
		},
		{
			name: 'URA',
			link: 'https://www.ura.go.ug/index.jsp',
		},
		{
			name: 'NIRA',
			link: 'http://www.nira.go.ug/',
		},
	],
	relatedLinks: [
		{
			name: 'Uganda Wildlife Authority',
			link: 'http://www.ugandawildlife.org/',
		},
		{
			name: 'Uganda Investment Authority',
			link: 'http://www.ugandainvest.go.ug',
		},
		{
			name: 'Ministry of Agriculture',
			link: 'http://www.agriculture.go.ug/',
		},
		{
			name: 'Uganda Tourism Board',
			link: 'http://www.visituganda.com/',
		},
		{
			name: 'Bank of Uganda',
			link: 'http://www.bou.or.ug/bou/home.html',
		},
		{
			name: 'Ministry of Tourism, Wildlife and Antiquities',
			link: 'http://tourism.go.ug/',
		},
	],
	tourismInUganda: [
		{
			name: 'Tourist Attractions',
			link: 'http://www.ugandawildlife.org/',
		},
		{
			name: 'Travel and Tourism',
			link: 'http://www.ugandainvest.go.ug',
		},
		{
			name: 'Ministry of Tourism, Wildlife and Antiquities',
			link: 'http://www.agriculture.go.ug/',
		},
		{
			name: 'Uganda Wildlife Authority',
			link: 'http://www.visituganda.com/',
		},
		{
			name: 'Tour Operators',
			link: 'http://www.bou.or.ug/bou/home.html',
		},
		{
			name: 'ICT',
			link: 'http://tourism.go.ug/',
		},
	],
	government: [
		{
			name: 'State House',
			link: 'http://www.ugandawildlife.org/',
		},
		{
			name: 'The Cabinet',
			link: 'http://www.ugandainvest.go.ug',
		},
		{
			name: 'Parliament',
			link: 'http://www.agriculture.go.ug/',
		},
		{
			name: 'Ministry of Foreign Affairs',
			link: 'http://www.visituganda.com/',
		},
		{
			name: 'Web Links to Ministries',
			link: 'http://www.bou.or.ug/bou/home.html',
		},
	],
};

export const socialMediaIcons = [
	{
		id: '001',
		name: <i className="zmdi zmdi-facebook"></i>,
		link: '#',
	},
	{
		id: '002',
		name: <i className="zmdi zmdi-twitter"></i>,
		link: '#tourism-section',
	},
	{
		id: '003',
		name: <i className="zmdi zmdi-instagram"></i>,
		link: '#educaton-section',
	},
	{
		id: '004',
		name: <i className="zmdi zmdi-linkedin-box"></i>,
		link: '#',
	},
	{
		id: '005',
		name: <i class="zmdi zmdi-youtube-play"></i>,
		link: '#',
	},
];

export const educationOpportunities = {
	pageName: 'Education',
	textOne: `It spreads through inhalation if somebody with the virus coughs (okukororra) or sneezes (okwetsyamura) near you ? within four metres from you. It will, then, infect you through the inhalation of the rwooya (vapour) of the sick person that would have coughed or sneezed.
2.   The second mode of spreading is when the infected person pollutes surfaces such as tables, door handles, etc. If you touch the polluted surface and, then, touch yourself in the soft parts of the body: eyes, nose or mouth, you also get infected. The virus cannot go through the normal, intact skin of a human being. It only goes through the soft parts mentioned above.
3.   Although`,
	textTwo: `It spreads through inhalation if somebody with the virus coughs (okukororra) or sneezes (okwetsyamura) near you ? within four metres from you. It will, then, infect you through the inhalation of the rwooya (vapour) of the sick person that would have coughed or sneezed.
2.   The second mode of spreading is when the infected person pollutes surfaces such as tables, door handles, etc. If you touch the polluted surface and, then, touch yourself in the soft parts of the body: eyes, nose or mouth, you also get infected. The virus cannot go through the normal, intact skin of a human being. It only goes through the soft parts mentioned above.
3.   Although`,
	coverImage: 'https://www.galaxyfm.co.ug/wp-content/uploads/2019/01/education-680x380.jpg',
	quickLinks: [
		{
			name: 'E-visa',
			link: 'https://visas.immigration.go.ug/',
		},
		{
			name: 'NITA-U',
			link: 'https://www.nita.go.ug/',
		},
		{
			name: 'E-visa',
			link: 'https://visas.immigration.go.ug/',
		},
		{
			name: 'Uganda Tourism Board',
			link: 'http://www.visituganda.com/',
		},
		{
			name: 'URA',
			link: 'https://www.ura.go.ug/index.jsp',
		},
		{
			name: 'NIRA',
			link: 'http://www.nira.go.ug/',
		},
	],
	data: [
		{
			id: '001',
			name: 'Andela',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Continue Reading...',
			image: 'https://www.galaxyfm.co.ug/wp-content/uploads/2019/01/education-680x380.jpg',
		},
		{
			id: '002',
			name: 'Snow',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Continue Reading...',
			image:
				'https://www.unicef.org/uganda/sites/unicef.org.uganda/files/styles/hero_desktop/public/UGA-education-73351.jpg?itok=1fbECMKE',
		},
		{
			id: '003',
			name: 'MTN',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Continue Reading...',
			image: 'https://www.galaxyfm.co.ug/wp-content/uploads/2019/01/education-680x380.jpg',
		},
		{
			id: '004',
			name: 'Airtel',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Continue Reading...',
			image:
				'https://www.unicef.org/uganda/sites/unicef.org.uganda/files/styles/hero_desktop/public/UGA-education-73351.jpg?itok=1fbECMKE',
		},
		{
			id: '005',
			name: 'SMT',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Continue Reading...',
			image: 'https://www.galaxyfm.co.ug/wp-content/uploads/2019/01/education-680x380.jpg',
		},
		{
			id: '006',
			name: 'RDB',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Continue Reading...',
			image: 'https://www.galaxyfm.co.ug/wp-content/uploads/2019/01/education-680x380.jpg',
		},
	],
};

export const publicNotice = {
	pageName: 'Public Notice',
	textOne: `It spreads through inhalation if somebody with the virus coughs (okukororra) or sneezes (okwetsyamura) near you ? within four metres from you. It will, then, infect you through the inhalation of the rwooya (vapour) of the sick person that would have coughed or sneezed.
2.   The second mode of spreading is when the infected person pollutes surfaces such as tables, door handles, etc. If you touch the polluted surface and, then, touch yourself in the soft parts of the body: eyes, nose or mouth, you also get infected. The virus cannot go through the normal, intact skin of a human being. It only goes through the soft parts mentioned above.
3.   Although`,
	textTwo: `It spreads through inhalation if somebody with the virus coughs (okukororra) or sneezes (okwetsyamura) near you ? within four metres from you. It will, then, infect you through the inhalation of the rwooya (vapour) of the sick person that would have coughed or sneezed.
2.   The second mode of spreading is when the infected person pollutes surfaces such as tables, door handles, etc. If you touch the polluted surface and, then, touch yourself in the soft parts of the body: eyes, nose or mouth, you also get infected. The virus cannot go through the normal, intact skin of a human being. It only goes through the soft parts mentioned above.
3.   Although`,
	coverImage: 'https://www.galaxyfm.co.ug/wp-content/uploads/2019/01/education-680x380.jpg',
	quickLinks: [
		{
			name: 'E-visa',
			link: 'https://visas.immigration.go.ug/',
		},
		{
			name: 'NITA-U',
			link: 'https://www.nita.go.ug/',
		},
		{
			name: 'E-visa',
			link: 'https://visas.immigration.go.ug/',
		},
		{
			name: 'Uganda Tourism Board',
			link: 'http://www.visituganda.com/',
		},
		{
			name: 'URA',
			link: 'https://www.ura.go.ug/index.jsp',
		},
		{
			name: 'NIRA',
			link: 'http://www.nira.go.ug/',
		},
	],
	data: [
		{
			id: '001',
			name: 'Andela',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Continue Reading...',
			image: 'https://www.galaxyfm.co.ug/wp-content/uploads/2019/01/education-680x380.jpg',
		},
		{
			id: '002',
			name: 'Snow',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Continue Reading...',
			image:
				'https://www.unicef.org/uganda/sites/unicef.org.uganda/files/styles/hero_desktop/public/UGA-education-73351.jpg?itok=1fbECMKE',
		},
		{
			id: '003',
			name: 'MTN',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Continue Reading...',
			image: 'https://www.galaxyfm.co.ug/wp-content/uploads/2019/01/education-680x380.jpg',
		},
		{
			id: '004',
			name: 'Airtel',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Continue Reading...',
			image:
				'https://www.unicef.org/uganda/sites/unicef.org.uganda/files/styles/hero_desktop/public/UGA-education-73351.jpg?itok=1fbECMKE',
		},
		{
			id: '005',
			name: 'SMT',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Continue Reading...',
			image: 'https://www.galaxyfm.co.ug/wp-content/uploads/2019/01/education-680x380.jpg',
		},
		{
			id: '006',
			name: 'RDB',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Continue Reading...',
			image: 'https://www.galaxyfm.co.ug/wp-content/uploads/2019/01/education-680x380.jpg',
		},
	],
};

export const tradeAndTourism = {
	pageName: 'Trade And Tourism',
	textOne: `It spreads through inhalation if somebody with the virus coughs (okukororra) or sneezes (okwetsyamura) near you ? within four metres from you. It will, then, infect you through the inhalation of the rwooya (vapour) of the sick person that would have coughed or sneezed.
2.   The second mode of spreading is when the infected person pollutes surfaces such as tables, door handles, etc. If you touch the polluted surface and, then, touch yourself in the soft parts of the body: eyes, nose or mouth, you also get infected. The virus cannot go through the normal, intact skin of a human being. It only goes through the soft parts mentioned above.
3.   Although`,
	textTwo: `It spreads through inhalation if somebody with the virus coughs (okukororra) or sneezes (okwetsyamura) near you ? within four metres from you. It will, then, infect you through the inhalation of the rwooya (vapour) of the sick person that would have coughed or sneezed.
2.   The second mode of spreading is when the infected person pollutes surfaces such as tables, door handles, etc. If you touch the polluted surface and, then, touch yourself in the soft parts of the body: eyes, nose or mouth, you also get infected. The virus cannot go through the normal, intact skin of a human being. It only goes through the soft parts mentioned above.
3.   Although`,
	coverImage: 'https://www.galaxyfm.co.ug/wp-content/uploads/2019/01/education-680x380.jpg',
	quickLinks: [
		{
			name: 'E-visa',
			link: 'https://visas.immigration.go.ug/',
		},
		{
			name: 'NITA-U',
			link: 'https://www.nita.go.ug/',
		},
		{
			name: 'E-visa',
			link: 'https://visas.immigration.go.ug/',
		},
		{
			name: 'Uganda Tourism Board',
			link: 'http://www.visituganda.com/',
		},
		{
			name: 'URA',
			link: 'https://www.ura.go.ug/index.jsp',
		},
		{
			name: 'NIRA',
			link: 'http://www.nira.go.ug/',
		},
	],
	data: [
		{
			id: '001',
			name: 'Andela',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Continue Reading...',
			image: 'https://www.galaxyfm.co.ug/wp-content/uploads/2019/01/education-680x380.jpg',
		},
		{
			id: '002',
			name: 'Snow',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Continue Reading...',
			image:
				'https://www.unicef.org/uganda/sites/unicef.org.uganda/files/styles/hero_desktop/public/UGA-education-73351.jpg?itok=1fbECMKE',
		},
		{
			id: '003',
			name: 'MTN',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Continue Reading...',
			image: 'https://www.galaxyfm.co.ug/wp-content/uploads/2019/01/education-680x380.jpg',
		},
		{
			id: '004',
			name: 'Airtel',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Continue Reading...',
			image:
				'https://www.unicef.org/uganda/sites/unicef.org.uganda/files/styles/hero_desktop/public/UGA-education-73351.jpg?itok=1fbECMKE',
		},
		{
			id: '005',
			name: 'SMT',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Continue Reading...',
			image: 'https://www.galaxyfm.co.ug/wp-content/uploads/2019/01/education-680x380.jpg',
		},
		{
			id: '006',
			name: 'RDB',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Continue Reading...',
			image: 'https://www.galaxyfm.co.ug/wp-content/uploads/2019/01/education-680x380.jpg',
		},
	],
};

export const adminProfiles = {
	pageName: 'Admin Profiles',
	textOne: `It spreads through inhalation if somebody with the virus coughs (okukororra) or sneezes (okwetsyamura) near you ? within four metres from you. It will, then, infect you through the inhalation of the rwooya (vapour) of the sick person that would have coughed or sneezed.
2.   The second mode of spreading is when the infected person pollutes surfaces such as tables, door handles, etc. If you touch the polluted surface and, then, touch yourself in the soft parts of the body: eyes, nose or mouth, you also get infected. The virus cannot go through the normal, intact skin of a human being. It only goes through the soft parts mentioned above.
3.   Although`,
	textTwo: `It spreads through inhalation if somebody with the virus coughs (okukororra) or sneezes (okwetsyamura) near you ? within four metres from you. It will, then, infect you through the inhalation of the rwooya (vapour) of the sick person that would have coughed or sneezed.
2.   The second mode of spreading is when the infected person pollutes surfaces such as tables, door handles, etc. If you touch the polluted surface and, then, touch yourself in the soft parts of the body: eyes, nose or mouth, you also get infected. The virus cannot go through the normal, intact skin of a human being. It only goes through the soft parts mentioned above.
3.   Although`,
	coverImage: 'https://www.galaxyfm.co.ug/wp-content/uploads/2019/01/education-680x380.jpg',
	quickLinks: [
		{
			name: 'E-visa',
			link: 'https://visas.immigration.go.ug/',
		},
		{
			name: 'NITA-U',
			link: 'https://www.nita.go.ug/',
		},
		{
			name: 'E-visa',
			link: 'https://visas.immigration.go.ug/',
		},
		{
			name: 'Uganda Tourism Board',
			link: 'http://www.visituganda.com/',
		},
		{
			name: 'URA',
			link: 'https://www.ura.go.ug/index.jsp',
		},
		{
			name: 'NIRA',
			link: 'http://www.nira.go.ug/',
		},
	],
	data: [
		{
			id: '001',
			name: 'Simon Peter',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			tile: 'President',
			image: 'https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
		},
		{
			id: '002',
			name: 'Matha Kay',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			title: 'Marketing',
			image: 'https://image.freepik.com/free-photo/friendly-brunette-looking-camera_23-2147774849.jpg',
		},
		{
			id: '003',
			name: 'Benjamin Ayowul',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			title: 'Production',
			image:
				'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
		},
		{
			id: '004',
			name: 'Deborah Linderlof',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			title: 'Admin',
			image:
				'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
		},
		{
			id: '005',
			name: 'Mercy Adele',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			title: 'Manager',
			image:
				'https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80',
		},
		{
			id: '006',
			name: 'RDB',
			link: '#',
			date: 'Jan 18, 2019',
			title: 'System Admin',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			title: 'Technology',
			image:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
		},
	],
};

export const tourism = {
	pageName: 'Tourism',
	textOne: `It spreads through inhalation if somebody with the virus coughs (okukororra) or sneezes (okwetsyamura) near you ? within four metres from you. It will, then, infect you through the inhalation of the rwooya (vapour) of the sick person that would have coughed or sneezed.
2.   The second mode of spreading is when the infected person pollutes surfaces such as tables, door handles, etc. If you touch the polluted surface and, then, touch yourself in the soft parts of the body: eyes, nose or mouth, you also get infected. The virus cannot go through the normal, intact skin of a human being. It only goes through the soft parts mentioned above.
3.   Although`,
	textTwo: `It spreads through inhalation if somebody with the virus coughs (okukororra) or sneezes (okwetsyamura) near you ? within four metres from you. It will, then, infect you through the inhalation of the rwooya (vapour) of the sick person that would have coughed or sneezed.
2.   The second mode of spreading is when the infected person pollutes surfaces such as tables, door handles, etc. If you touch the polluted surface and, then, touch yourself in the soft parts of the body: eyes, nose or mouth, you also get infected. The virus cannot go through the normal, intact skin of a human being. It only goes through the soft parts mentioned above.
3.   Although`,
	coverImage: 'https://www.galaxyfm.co.ug/wp-content/uploads/2019/01/education-680x380.jpg',
	quickLinks: [
		{
			name: 'E-visa',
			link: 'https://visas.immigration.go.ug/',
		},
		{
			name: 'NITA-U',
			link: 'https://www.nita.go.ug/',
		},
		{
			name: 'E-visa',
			link: 'https://visas.immigration.go.ug/',
		},
		{
			name: 'Uganda Tourism Board',
			link: 'http://www.visituganda.com/',
		},
		{
			name: 'URA',
			link: 'https://www.ura.go.ug/index.jsp',
		},
		{
			name: 'NIRA',
			link: 'http://www.nira.go.ug/',
		},
	],
	data: [
		{
			id: '001',
			name: 'Africa tours and travel',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Lern more ...',
			image: 'https://image.shutterstock.com/image-vector/letter-hd-logo-initial-design-600w-1226203180.jpg',
		},
		{
			id: '002',
			name: 'Snow',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Lern more ...',
			image: 'https://image.shutterstock.com/image-vector/letter-hd-logo-initial-design-600w-1226203180.jpg',
		},
		{
			id: '003',
			name: 'MTN',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Lern more ...',
			image: 'https://seeklogo.com/images/M/MTN-logo-459AAF9482-seeklogo.com.png',
		},
		{
			id: '004',
			name: 'Airtel',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Lern more ...',
			image: 'https://mcdn.wallpapersafari.com/medium/86/32/IbNfQ6.jpg',
		},
		{
			id: '005',
			name: 'SMT',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Lern more ...',
			image: 'https://image.shutterstock.com/image-vector/hd-letter-logo-design-template-600w-606434585.jpg',
		},
		{
			id: '006',
			name: 'RDB',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Lern more ...',
			image: 'https://image.shutterstock.com/image-vector/hd-company-linked-letter-logo-600w-373534414.jpg',
		},
	],
};

export const visaApplication = {
	pageName: 'Visa Application',
	textOne: `It spreads through inhalation if somebody with the virus coughs (okukororra) or sneezes (okwetsyamura) near you ? within four metres from you. It will, then, infect you through the inhalation of the rwooya (vapour) of the sick person that would have coughed or sneezed.
2.   The second mode of spreading is when the infected person pollutes surfaces such as tables, door handles, etc. If you touch the polluted surface and, then, touch yourself in the soft parts of the body: eyes, nose or mouth, you also get infected. The virus cannot go through the normal, intact skin of a human being. It only goes through the soft parts mentioned above.
3.   Although`,
	textTwo: `It spreads through inhalation if somebody with the virus coughs (okukororra) or sneezes (okwetsyamura) near you ? within four metres from you. It will, then, infect you through the inhalation of the rwooya (vapour) of the sick person that would have coughed or sneezed.
2.   The second mode of spreading is when the infected person pollutes surfaces such as tables, door handles, etc. If you touch the polluted surface and, then, touch yourself in the soft parts of the body: eyes, nose or mouth, you also get infected. The virus cannot go through the normal, intact skin of a human being. It only goes through the soft parts mentioned above.
3.   Although`,
	coverImage: 'https://www.galaxyfm.co.ug/wp-content/uploads/2019/01/education-680x380.jpg',
	quickLinks: [
		{
			name: 'E-visa',
			link: 'https://visas.immigration.go.ug/',
		},
		{
			name: 'NITA-U',
			link: 'https://www.nita.go.ug/',
		},
		{
			name: 'E-visa',
			link: 'https://visas.immigration.go.ug/',
		},
		{
			name: 'Uganda Tourism Board',
			link: 'http://www.visituganda.com/',
		},
		{
			name: 'URA',
			link: 'https://www.ura.go.ug/index.jsp',
		},
		{
			name: 'NIRA',
			link: 'http://www.nira.go.ug/',
		},
	],
	data: [
		{
			id: '001',
			name: 'Download visa forms',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Download',
			image: 'https://berlin.mofa.go.ug/files/media/New%20Passport%20Photo%20by%20Mo_InPixio.jpg',
		},
		{
			id: '002',
			name: 'Fill online forms',
			link: '#',
			date: 'Jan 18, 2019',
			description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores
								sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.
								`,
			command: 'Fill form',
			image: 'https://www.pdffiller.com/preview/35/82/35082005.png',
		},
	],
};

export const text = {
	m7: ` It spreads through inhalation if somebody with the virus coughs (okukororra) or sneezes (okwetsyamura) near you ? within four metres from you. It will, then, infect you through the inhalation of the rwooya (vapour) of the sick person that would have coughed or sneezed.
2.   The second mode of spreading is when the infected person pollutes surfaces such as tables, door handles, etc. If you touch the polluted surface and, then, touch yourself in the soft parts of the body: eyes, nose or mouth, you also get infected. The virus cannot go through the normal, intact skin of a human being. It only goes through the soft parts mentioned above.
3.   Although the healthy people afflicted may survive, it can kill alot of people that already have other medical conditions such as Aids, blood-pressure, pregnancy, diabetes, sickle-cells, cancer, the elderly, etc. In China, its kill rate was 4.05%.  In Italy its now 11.03% and Spain, its kill rate is now 8.4%.  It even kills the young people in some circumstances, like the young doctor, Li Wenliang, of Wuhan in China, who first identified this problem. He was only 33 years old.
Given its spread methods ? sneezing and coughing by an inconsiderate and careless person in a cluster of people bunched together as well as an individual's own carelessness of touching the soft parts of your   body (the eyes, the nose and the mouth) without washing your hands or sanitizing them first, after careful study, we decided that this virus will spread fastest if it gets into large concentrations of people, some of whom may be behaving inconsiderately or carelessly as stated above. We, therefore, adopted the strategy of dispersing any concentration that may provide fuel to this virus.
`,
	
	ambassador: `SPEECH BY H.E. PROF. JOYCE KAKURAMATSI KIKAFUNDA, HIGH COMMISSIONER OF UGANDA TO AUSTRALIA, AT THE 57TH INDEPENDENCE ANNIVERSARY 9TH OCTOBER 2019, HYATT HOTEL CANBERRA, AUSTRALIA`
};
