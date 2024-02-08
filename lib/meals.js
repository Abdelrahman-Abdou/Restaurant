import sql from "better-sqlite3";
const db = sql("meals.db");
export async function getAllMeals() {
  const meals = db.prepare("SELECT * FROM meals").all();
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 5000);
  });
  // throw new Error("This is a simulated error");
  return meals;
}
export async function findOneMeal(id) {
  const meal = db.prepare("SELECT * FROM meals WHERE slug =?").get(id);
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 5000);
  });
  // throw new Error("This is a simulated error");
  return meal;
}
