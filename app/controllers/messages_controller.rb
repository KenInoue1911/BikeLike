class MessagesController < ApplicationController
 # DMのメッセージ機能

  # メッセージを作成
  def create
    if Entry.where(:user_id => current_user.id, :room_id => params[:message][:room_id]).present?
      @message = Message.new(message_params)
      @message.save!
      redirect_to "/rooms/#{@message.room_id}"
    else
      redirect_back(fallback_location: root_path)
    end
  end

  # ストロングパラメーター
  private

  def message_params
    params.require(:message).permit(:user_id, :message, :room_id).merge(:user_id => current_user.id)
  end

end
