import travelPlansData from "../assets/travel-plans.json";
import TravelCard from "./TravelCard";
import "./TravelList.css"

export default function TravelList() {
	return (
		<div className="travel-list">
			{travelPlansData.map((travel, index) => {
				return <TravelCard key={index} eachCard={travel} />;
			})}
		</div>
	);
}
