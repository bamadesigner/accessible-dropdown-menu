export default [
	{
		href: "/",
		text: "First level 1",
	},
	{
		id: "second-item",
		href: "/",
		text: "First level 2",
		label: "Second item on first level",
		children: [
			{
				href: "/",
				text: "Second level one",
			},
			{
				href: "/",
				text: "Second level two",
				children: [
					{
						href: "/",
						text: "Third level one",
					},
					{
						href: "/",
						text: "Third level two",
					},
				],
			},
			{
				href: "/",
				text: "Second level three",
			},
			{
				href: "/",
				text: "Second level four",
			},
		],
	},
	{
		id: "third-item",
		href: "/",
		text: "First level 3",
		children: [
			{
				href: "/",
				text: "Second level one",
				children: [
					{
						href: "/",
						text: "Third level one",
					},
					{
						href: "/",
						text: "Third level two",
						children: [
							{
								href: "/",
								text: "Fourth level one",
							},
							{
								href: "/",
								text: "Fourth level two",
							},
						],
					},
				],
			},
			{
				href: "/",
				text: "Second level two",
			},
		],
	},
	{
		href: "/",
		text: "First level 4",
	},
	{
		id: "fifth-item",
		href: "/",
		text: "First level 5",
		children: [
			{
				href: "/",
				text: "Second level one",
			},
		],
	},
] as NavMenuItem[];