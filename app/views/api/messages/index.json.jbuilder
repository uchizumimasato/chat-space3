json.array! @last_messages do |message|
  json.content   message.content
  json.image     message.image
  json.user_name message.user.name
  json.time      message.created_at.strftime("%-m/%-d %-H%-M")
  json.id        message.id
  json.group_id  message.group_id
end
