export function formatDateLabel(date: Date) {
	let hours = date.getHours();
	const minutes = date.getMinutes().toString().padStart(2, "0");

	const ampm = hours >= 12 ? "PM" : "AM";
	hours = hours % 12 || 12; // convert 0 to 12 for 12 AM

	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear();

	return `${hours}:${minutes}${ampm} • ${day}/${month}/${year}`;
}
