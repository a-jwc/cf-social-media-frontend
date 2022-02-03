import { Link } from "@reach/router";
import {
	MdViewModule,
	MdChat,
	MdAdd,
	MdAccountCircle,
	MdHome,
} from "react-icons/md";

interface IconProp {
	icon: JSX.Element;
}

export const Sidebar = () => {
	return (
		<div className="fixed top-0 left-0 md:h-screen h-16 md:w-16 w-full m-0 flex md:flex-col align-center border-neutral-700 text-white bg-primary-1100 shadow-xl">
			<Link to={`/`}>
				<SideBarIcon icon={<MdHome size="35" />} />
			</Link>
			<Link to={`#`}>
				<SideBarIcon icon={<MdAccountCircle size="35" />} />
			</Link>
			<Link to={`#`}>
				<SideBarIcon icon={<MdChat size="35" />} />
			</Link>
			<Link to={`#`}>
				<SideBarIcon icon={<MdAdd size="35" />} />
			</Link>
			<Link to={`#`}>
				<SideBarIcon icon={<MdViewModule size="35" />} />
			</Link>
		</div>
	);
};

const SideBarIcon = ({ icon }: IconProp) => {
	return <div className="sidebar-icon">{icon}</div>;
};
