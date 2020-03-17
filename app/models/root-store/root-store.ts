import { PostStoreModel } from "models/post-store"
import { UserStoreModel } from "models/user-store"
import { AuthStoreModel } from "models/auth-store"
import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
	postStore: types.optional(PostStoreModel, {}),
	userStore: types.optional(UserStoreModel, {}),
	authStore: types.optional(AuthStoreModel, {})
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> { }

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> { }
