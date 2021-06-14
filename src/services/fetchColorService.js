import axiosWithAuth from "../helpers/axiosWithAuth";

const fetchColorService = () => {
	return axiosWithAuth()
		.get("colors")
		.then(res => res)
		.catch(err => console.log(err));
};

export const editColorService = color => {
	return axiosWithAuth()
		.put(`/colors/${color.id}`, color)
		.then(res => res)
		.catch(err => console.log(err));
};

export const deleteColorService = color => {
	return axiosWithAuth()
		.delete(`/colors/${color.id}`)
		.then(res => res)
		.catch(err => err);
};

export default fetchColorService;
