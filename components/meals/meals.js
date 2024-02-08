import { getAllMeals } from "@/lib/meals";
import MealsGrid from "./meals-grid";

const Meals = async()=>{
    const meals = await getAllMeals()
    return (
        <MealsGrid  meals={meals} />
    )
}

export default Meals