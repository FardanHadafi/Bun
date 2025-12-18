import {z} from "zod";

const loginValidation = z.object({username: z.string(), password: z.number()});
const request = {
  username: "Salah",
  password: ""
}
loginValidation.parse(request);