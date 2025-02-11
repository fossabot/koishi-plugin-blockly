import {javascriptGenerator} from 'blockly/javascript'
export const SendSessionMessageBlock = {
  "type": "send_session_message",
  "message0": "发送消息给事件发送者 %1",
  "args0": [
    {
      "type": "input_value",
      "name": "content",
      "check": [
        "Boolean",
        "String"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "extensions":['session_consumer'],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

export function sendSessionMessageBlock(block){
  let value_name = javascriptGenerator.valueToCode(block, 'content', javascriptGenerator.ORDER_ATOMIC);
  return `await session.send(${value_name});\n`;
}

export const BreakMiddlewareBlock = {
  "type": "break_middleware",
  "message0": "终止后续逻辑执行",
  "previousStatement": null,
  "extensions":['session_consumer'],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

export function breakMiddlewareBlock(){
  return 'return null;\n';
}


export const ReturnMessageBlock = {
  "type": "return_message",
  "message0": "终止后续逻辑并发送消息 %1",
  "args0": [
    {
      "type": "input_value",
      "name": "content",
      "check": [
        "Boolean",
        "String"
      ]
    }
  ],
  "previousStatement": null,
  "extensions":['session_consumer'],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

export function returnMessageBlock(block){
  let value_name = javascriptGenerator.valueToCode(block, 'content', javascriptGenerator.ORDER_ATOMIC);
  return `return ${value_name};\n`;
}

export const SessionMessageBlock = {
  "type": "session_message",
  "message0": "发送消息的内容",
  "extensions":['session_consumer'],
  "output": "String",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

export function sessionMessageBlock(){
  return [`session.content`,javascriptGenerator.ORDER_NONE];
}


export const SessionUserIdBlock = {
  "type": "session_user_id",
  "message0": "发送消息用户的平台用户ID",
  "output": "String",
  "extensions":['session_consumer'],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

export function sessionUserIdBlock(){
  return [`session.userId`,javascriptGenerator.ORDER_NONE];
}

export const SessionBotBlock = {
  "type": "session_bot",
  "message0": "收到消息的机器人对象",
  "output": "String",
  "extensions":['session_consumer'],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

export function sessionBotBlock(){
  return [`session.bot`,javascriptGenerator.ORDER_NONE];
}

export const SegmentAtBlock = {
  "type": "segment_at",
  "message0": "@ %1",
  "args0": [
    {
      "type": "input_value",
      "name": "user",
      "check": "String"
    }
  ],
  "output": "String",
  "extensions":['session_consumer'],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

export function segmentAtBlock(block){
  let user = javascriptGenerator.valueToCode(block, 'user', javascriptGenerator.ORDER_ATOMIC);
  return [`segment.at(${user})`,javascriptGenerator.ORDER_NONE];
}

export const SegmentImageBlock = {
  "type": "segment_image",
  "message0": "图片 %1",
  "args0": [
    {
      "type": "input_value",
      "name": "image",
      "check": "String"
    }
  ],
  "output": "String",
  "extensions":['session_consumer'],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

export function segmentImageBlock(block){
  let image = javascriptGenerator.valueToCode(block, 'image', javascriptGenerator.ORDER_ATOMIC);
  return [`segment.image(${image})`,javascriptGenerator.ORDER_NONE];
}

export const SegmentAudioBlock = {
  "type": "segment_audio",
  "message0": "语音 %1",
  "args0": [
    {
      "type": "input_value",
      "name": "audio",
      "check": "String"
    }
  ],
  "output": "String",
  "extensions":['session_consumer'],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

export function segmentAudio(block){
  let audio = javascriptGenerator.valueToCode(block, 'audio', javascriptGenerator.ORDER_ATOMIC);
  return [`segment.audio(${audio})`,javascriptGenerator.ORDER_NONE]
}

export const SessionGuildId = {
  "type": "session_guild_id",
  "message0": "消息来自的群组编号",
  "output": "String",
  "extensions":['session_consumer'],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

export function sessionChannelId(){
  return [`session.channelId`,javascriptGenerator.ORDER_NONE];
}

export const SessionChannelId = {
  "type": "session_channel_id",
  "message0": "消息来自的频道编号(群号)",
  "output": "String",
  "extensions":['session_consumer'],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

export function sessionGuildId(){
  return [`session.guildId`,javascriptGenerator.ORDER_NONE];
}

export const SessionMessageId = {
  "type": "session_message_id",
  "message0": "消息编号",
  "output": "String",
  "extensions":['session_consumer'],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}

export function sessionMessageId(){
  return [`session.messageId`,javascriptGenerator.ORDER_NONE];
}

export const SessionBlocks = [
  SendSessionMessageBlock,
  BreakMiddlewareBlock,
  ReturnMessageBlock,
  SessionMessageBlock,
  SessionUserIdBlock,
  SegmentAtBlock,
  SegmentImageBlock,
  SessionChannelId,
  SessionGuildId,
  SessionMessageId,
  SessionBotBlock,
  SegmentAudioBlock
]

export const sessionBlocks = {
  'send_session_message':sendSessionMessageBlock,
  'break_middleware':breakMiddlewareBlock,
  'return_message':returnMessageBlock,
  'session_message':sessionMessageBlock,
  'session_user_id':sessionUserIdBlock,
  'segment_at':segmentAtBlock,
  'segment_image':segmentImageBlock,
  'session_channel_id':sessionChannelId,
  'session_guild_id':sessionGuildId,
  'session_message_id':sessionMessageId,
  'session_bot':sessionBotBlock,
  'segment_audio':segmentAudio
}
