class UserService {

	constructor(opts) {
		this.model = opts.userModel
	}

	query(expression) {
		return { modelInitialized: this.model 
			&& this.model.modelName 
			&& this.model.modelName == 'UserModel' };

			// todo;
	}

	add(userobject) {
		// todo;
	}

	del(userId) {
		// todo;
	}
}

module.exports = UserService