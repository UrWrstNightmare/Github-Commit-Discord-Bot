const reactionMiddleware = async (msg, success) => {
    if (success) await msg.react('✅'); // Add reaction;
    else await msg.react('😭');
}

export default reactionMiddleware;