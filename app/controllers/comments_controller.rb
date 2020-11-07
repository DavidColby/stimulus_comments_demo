class CommentsController < ApplicationController
  before_action :set_project

  def create
    comment = Comment.new(comment_params)
    comment.project = @project
    if comment.save
      render partial: 'show', locals: { comment: comment }, status: :ok
    else
      render partial: 'form', locals: { comment: comment }, status: :unprocessable_entity
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

  def set_project
    @project = Project.find(params[:project_id])
  end
end
