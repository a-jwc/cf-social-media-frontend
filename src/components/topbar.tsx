import { Link } from "@reach/router";

export const TopBar = () => {
	return (
		<nav className="bg-primary-800 ml-12">
			<div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-end h-14">
					<a href="https://www.alextheproxy.com/" target="_blank" rel="noreferrer">
						<strong className="text-white w-auto tracking-widest">AJWC</strong>
					</a>
				</div>
			</div>
		</nav>
	);
};
