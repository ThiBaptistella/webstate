class RealStateController < ApplicationController
	layout 'application'
  def index
  	@sendingdata="you come from index"
  end
  def info
  	@sendingdata="you come from info"
  	render(:template => 'real_state/index')
  end
  def home
  	redirect_to(:controller =>'real_state', :action => 'index')
  end
  def testing
    render(:template => 'real_state/testing')
  end
  def suburb_search
    render(:template => 'real_state/suburb_search')
  end
end
