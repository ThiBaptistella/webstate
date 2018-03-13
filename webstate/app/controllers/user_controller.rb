class UserController < ApplicationController

def list
	@users = User.all
end

def show
	@users = User.find(params[:id])
end

def new
	@user = User.new
end

def create
	@user = User.new(user_params)
	if @user.save
		redirect_to :action => 'list'
	end
end
def user_params
	params.require(:user).permit(:UserName, :UserPassword, :UserEmail, :UserFirstName, :UserSurname, :UserPhone, :UserAdmin)
end
end
