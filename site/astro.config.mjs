// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Apex Printworks — Shop KB',
			description: 'Operational Knowledge Base & Screen Printing Reference',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/KevinBrack/sync-test-vault' }
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Shop Overview & Navigation', slug: 'overview' },
					],
				},
				{
					label: 'Darkroom Operations',
					items: [{ autogenerate: { directory: 'darkroom' } }],
				},
				{
					label: 'Press Room & Inks',
					items: [{ autogenerate: { directory: 'press-room' } }],
				},
				{
					label: 'Equipment & Maintenance',
					items: [{ autogenerate: { directory: 'equipment' } }],
				},
				{
					label: 'Customer Support & FAQ',
					items: [{ autogenerate: { directory: 'support' } }],
				},
			],
		}),
	],
});
