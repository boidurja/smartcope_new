import { PostStoreModel, PostStore } from "./post-store"

test("can be created", () => {
	const instance: PostStore = PostStoreModel.create({})

	expect(instance).toBeTruthy()
})