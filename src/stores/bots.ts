import { readable } from 'svelte/store';

let emptyStrArr: string[] = [];

export const bots = readable(emptyStrArr, (set) => {
	let bots: string[] = [
		'CyberAIO',
		'Ganesh',
		'KageAIO',
		'Prism',
		'Nebula',
		'MekAIO',
		'MekPreme',
		'Polaris',
		'Balko',
		'Dragon AIO',
		'Dashe',
		"Kylin Bot",
		"Sigma",
		'Rush',
		'Tohru',
		'Project Destroyer',
		'SwftAIO',
		'Velox',
		'Scottbot',
		'Adept',
		'Phantom',
		'LightingATC',
		'Fleek',
		'Flare',
		'AIOMOJI',
		'Burst',
		'EStock',
		'Stellar',
		'Eve',
		'F3',
		'Nike Shoe Bot',
		'Another Nike Bot',
		'Fluid',
		'Galaxio',
		'WhatBot',
		'EasyCopBot',
		'Viper',
		'SwiftSole',
		'TheShitBot',
		'BetterNikeBot',
		'Hawkmesh',
		'Hayha',
		'Kilo',
		'Kodai',
		'Koi Solutions',
		'mBot',
		'Ominious',
		'Phasma',
		'PolarCop',
		'Pulsar',
		'RE AIO',
		'Sole',
		'TKS',
		'Torpedo',
		'Valor',
		'QuickCop',
		'Wrath',
		'Splashforce',
		'Zeny',
	];

	set(bots);
});
