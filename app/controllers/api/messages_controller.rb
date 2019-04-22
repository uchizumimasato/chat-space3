class Api::MessagesController < ApplicationController
  def index
    @last_messages = Message.where("id > ? and group_id = ?", params[:last_message_id], params[:group_id])
  end
end
