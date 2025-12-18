import {describe, it, expect} from "bun:test";
import {User} from "../packages/user/user.ts";
describe('Bun Test user', () => {
    it('should support unit test', async () => {
      const user = new User("Dafi");
      expect(user.name).toBe("Dafi");
    })
})