import Link from 'next/link';

const Navbar = () => {
	let navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about' },
		{ name: 'Contact', href: '/contact' },
	];
	return (
		<div className='z-10 w-full h-20 flex border-b border-zinc-200 justify-end items-center bg-inherit sticky'>
			<div className='flex'>
				{navItems.map((navItem) => (
					<Link href={navItem.href}>
						<a className='text-xl font-light mr-12'>{navItem.name}</a>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Navbar;
