import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { UserStoreModel } from "models/user-store"

/**
 * Model description here for TypeScript hints.
 */
export const AuthStoreModel = types
	.model("AuthStore")
	.props({
		bootstrapping: false,
		user: types.maybe( types.reference( UserStoreModel ) )
	})
	.views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
	.actions(self => ({
		
		async fetch ( ) {

		},

		async login ( ) {

		},

		async logout ( ) {

		},

		async register ( ) {
			
		},

		async bootstrap ( ) {
			self.bootstrapping = true;
			self.bootstrapping = false;
		}

	})) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
* Un-comment the following to omit model attributes from your snapshots (and from async storage).
* Useful for sensitive data like passwords, or transitive state like whether a modal is open.

* Note that you'll need to import `omit` from ramda, which is already included in the project!
*  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
*/

type AuthStoreType = Instance<typeof AuthStoreModel>
export interface AuthStore extends AuthStoreType { }
type AuthStoreSnapshotType = SnapshotOut<typeof AuthStoreModel>
export interface AuthStoreSnapshot extends AuthStoreSnapshotType { }
