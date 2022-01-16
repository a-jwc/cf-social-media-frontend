import { Link } from "@reach/router";
import { IconType } from "react-icons";
import {
	MdViewModule,
	MdChat,
	MdAdd,
	MdAccountCircle,
	MdHome,
} from "react-icons/md";
import { JsxElement } from "typescript";

interface IconProp {
	icon: JSX.Element;
}

export const Sidebar = () => {
	return (
		<div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col align-center border-neutral-700 text-white bg-primary-1100 shadow-xl">
			<Link to={`/`}>
				<SideBarIcon icon={<MdHome size="35" />} />
			</Link>
			<SideBarIcon icon={<MdAccountCircle size="35" />} />
			<SideBarIcon icon={<MdChat size="35" />} />
			<SideBarIcon icon={<MdAdd size="35" />} />
			<SideBarIcon icon={<MdViewModule size="35" />} />
		</div>
	);
};

const SideBarIcon = ({ icon }: IconProp) => {
	return <div className="sidebar-icon">{icon}</div>;
};
