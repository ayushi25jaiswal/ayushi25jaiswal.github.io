export default {
	bio: {
		about: {
			text: [
				"Hi &#128075;",
				"I am Ayushi Jaiswal, currently in final year of B'tech pursuing Information Technology from Rajasthan Technica University. ",
				"I'm a developer,an OpenSource and Web3 enthusiast. New technologies fasinates me, trying my best to keep up with the pace.",
				
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me, be it for exploring a technology, a business, or to just say hi, feel free to send me an email. My email address is: vinaysomawat40@gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "Python, JavaScript, C++",
			color: "1",
			percentage: "70",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "Reactjs, Expressjs, Django, Flask",
			color: "6",
			percentage: "50",
		},
		{
			title: "Backend",
			skillName: "Nodejs, MongoDB",
			color: "2",
			percentage: "40",
		},
		{
			title: "Clouds",
			skillName: "Heroku, Google Cloud",
			color: "3",
			percentage: "30",
		},
		{
			title: "Design",
			skillName: "HTML, Bootstrap, SCSS",
			color: "4",
			percentage: "70",
		},
		{
			title: "Version Control",
			skillName: "GitHub, Git",
			color: "7",
			percentage: "70",
		},
		
		
		{
			title: "Editor",
			skillName: "VS Code, Atom",
			color: "6",
			percentage: "70",
		},
	],
	projects: {
		web: [
			
			
			{
				projectName: "TaskMate",
				image: "images/taskmate.png",
				summary:
					"A very simple Task Management web app written with Django Admin.",
					
				preview: "https://github.com/ayushi25jaiswal/taskmate",
				techStack: ["Django","SQLite", "Bootstrap", "JavaScript"],
			},
			{
				projectName: "Notes Keeper",
				image: "images/noteskeeper.png",
				summary:
					" A Note Taking Web Application used to store information or notes in a database so that it never loses, it is just like Google Keep.",
				preview: "https://github.com/ayushi25jaiswal/Notes_Keeper",
				techStack: ["Reactjs","HTML", "Bootstrap", "JavaScript", "Nodejs"],
			},
			{
				projectName: "Chat-Bot",
				image: "images/chatbot.png",
				summary:
					"build a simple NLP based chatbot using pytorch",
				preview: "",
				techStack: ["Flask", "Pytorch", "Python"],
			},
		],
		software: [
			{
				projectName: "Opend NFTs Marketplace",
				image: "images/opend.jpg",
				summary:
					"Developed NFT marketplace is a blockchain-based online platform Internet Computer to sell and buy non-fungible tokens (NFTs).",
				preview: "https://github.com/ayushi25jaiswal/opend",
				techStack: ["Reactjs", "Bootstrap", "Internet Computer", "Motoko"],
			},
			
		],
		android: [
			{
				projectName: "Technical Tales (Blog Website)",
				image: "images/technicaltales.png",
				summary:
					"Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
				preview: "https://ayushi-blog.herokuapp.com/",
				techStack: ["Flask", "Python", "SQLite","Javascript","Heroku"],
			},
			
		],
		freelance: [
			{
				projectName: "RAKSHA",
				image: "images/raksha.png",
				summary:
					"Contributed to RAKSHA web app,Estimates human pose using a webcam and analyzes the pose in order to give a score.This framework aims at teaching self defense to users. ",
				preview: "https://github.com/ayushi25jaiswal/RAKSHA",
				techStack: ["Flask", "OpenCV", "HTML","CSS"],
			},
			
		],
	},
	experience: [
		{
			title: "Bit to Bytes Robotics",
			duration: "May 2022 - July 2022",
			subtitle: "Frontend Developer",
			details: [
				"Worked as a Frontend developer to support tech team.",
				"Developed a customer Web Application from scratch for social media management.",
			],
			tags: [
				"JavaScript",
				"React",
				"Bootstrap",
				"Nodejs",
			],
			icon: "group",
		},
		{
			title: "Winter of Code 2.0",
			duration: "Dec 2021 - Feb 2022",
			subtitle: "Python Developer",
			details: [
				"I worked on RAKSHA web app in WOC 2.0 conducted by GDSC-IIIT Kalyani",
				" Raksha web app estimates human pose using a webcam and analyzes the pose in order to give a score.This framework aims at teaching self defense to users."
			],
			tags: [
				"Flask",
				"Python",
				"Javascript",
				"Bootstrap",
				"OpenCV",
			],
			icon: "group",
		},

	],
	education: [
		{
			title: "Bachelors in Information Technology",
			duration: "2019-2023",
			subtitle: "Rajasthan Technical University-Kota",
			details: [
				"CGPA - 9.2"
				
			],
			tags: [
				"Data Structures & Algorithms",
				"Operating Systems",
				"Database Management System",
				"Computer Networks",
				"System Designing",
				
			],
			icon: "graduation-cap",
		},
		{
			title: "Class 11-12th in Science and Mathematics",
			duration: "2017-2019",
			subtitle: "Ascent International Senior Secondary School",
			details: [
				"Secured 80.4 percentile in Class 12th Boards Examinations.",
			],
			tags: ["Physics", "Chemistry", "Mathematics"],
			icon: "book",
		},
	],
	footer: [
		// {
		// 	label: "Dev Profiles",
		// 	data: [
		// 		{
		// 			text: "GitHub",
		// 			link: "https://github.com/ayushi25jaiswal",
		// 		},
		// 		{
		// 			text: "LeetCode",
		// 			link: "",
		// 		},
		// 	],
		// },
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
				
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "GitHub",
					link: "https://github.com/ayushi25jaiswal",
				},
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/ayushi-jaiswal-69804a216",
				},
				{
					text: "Twitter",
					link: "https://twitter.com/Ayushi_25_",
				},
				
			],
		},
		{
			label: "copyright-text",
			data: [
				"Made with &hearts; ."
			],
		},
	],
};
