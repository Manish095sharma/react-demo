import { SELECT_CATEGORY } from "../actions/action_types";

const initialCategoryState = {
    selected_categories: [
        {
            _id: 1,
            categoryName: "Portgual",
            category_itmes: [

                {
                    _id: 1,

                    name: "Aasiya Jayavant",
                    selected: false
                },
                {
                    _id: 2,

                    name: "Lavleen Lawrenece",
                    selected: false

                },
                {
                    _id: 3,

                    name: "Rey Mibourne",
                    selected: false

                },
                {
                    _id: 4,

                    name: "Cayla Brister", selected: false

                }
            ]
        },
        {
            _id: 2,

            categoryName: "Nicargua",
            category_itmes: [

                {
                    _id: 1,

                    name: "DeeveeDaas Nandi",
                    selected: false

                },
                {
                    _id: 2,

                    name: "Obasey Chidy",
                    selected: false

                },
                {
                    _id: 3,


                    name: "Xenie",
                    selected: false

                },
                {
                    _id: 4,

                    name: "Ezequiel",
                    selected: false

                }
            ]
        },
        {
            _id: 3,
            categoryName: "Marhall Islands",
            category_itmes: [

                {
                    _id: 1,

                    name: "Aaron",
                    selected: false

                },
                {
                    _id: 2,

                    name: "Jelena",
                    selected: false

                },
                {
                    _id: 3,

                    name: "Xenie",
                    selected: false

                }

            ]
        }



    ]
};

const categories = (state = initialCategoryState, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {
                ...state,
                selected_categories: action.payload.data
            };

        default:
            return state;
    }
};
export default categories
