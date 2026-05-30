import React, { useState } from 'react';
import {
  RichTextEditor,
  MenuControlsContainer,
  MenuButtonBold,
  MenuButtonItalic,
  MenuButtonUnderline,
  MenuButtonBulletedList,
  MenuButtonOrderedList,
  MenuButtonUndo,
  MenuButtonRedo,
} from "mui-tiptap";
import StarterKit from "@tiptap/starter-kit";
import { Button, TextField, Box } from "@mui/material";

function BlogEditor(props) {
      const [title, setTitle] = useState("");

  const editorExtensions = [StarterKit];
    return (
          <Box>
      <TextField
        fullWidth
        label="Blog Title"
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <RichTextEditor
        extensions={editorExtensions}
        content=""
        renderControls={() => (
          <MenuControlsContainer>
            <MenuButtonBold />
            <MenuButtonItalic />
            <MenuButtonUnderline />
            <MenuButtonBulletedList />
            <MenuButtonOrderedList />
            <MenuButtonUndo />
            <MenuButtonRedo />
          </MenuControlsContainer>
        )}
        onUpdate={({ editor }) => {
          window.blogContent = editor.getHTML();
        }}
      />

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={() =>
          onSave({
            id: Date.now(),
            title,
            content: window.blogContent || "",
          })
        }
      >
        Create Blog
      </Button>
    </Box>
    );
}

export default BlogEditor;