class Api::MessagesController < ApplicationController
  def index
    @last_messages = Message.where('id > ?', params[:id])
    respond_to do |format|
      format.json
    end
  end
end
