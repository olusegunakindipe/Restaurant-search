import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer uLZVA2gT_jhL5p5sXIuN9CocI2NYueCm6lyyRdsft6uvU0vGndWHUb1HROlecE8z-UMj4Ih5YNNOfvjfTCuq8iMNEprw6Db6xCjzQTZzocLlZcgCtTYmtDDcJxfTY3Yx",
  },
});
