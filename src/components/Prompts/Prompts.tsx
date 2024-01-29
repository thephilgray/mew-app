import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Card, CardContent, CardHeader, Chip, Grid, TextField, Typography } from '@mui/material';
import { API, graphqlOperation } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid'
import { useProfile } from '../../auth/hooks';
import Loading from '../Loading';
import { getDisplayName } from '../../utils';
import { createPrompt } from '../../graphql/d3/mutations';
import { listPrompts } from '../../graphql/d3/queries';
import { LinkedMemberAvatar } from '../Avatar';
import { Prompt, CreatePromptInput } from '../../API';
import If from '../If';


type PromptsProps = {};

const Prompts: React.FC<PromptsProps> = () => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [randomPrompt, setRandomPrompt] = useState<Prompt | null>(null);
  const { profile } = useProfile()

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const toggleForm = () => {
    setShowCreateForm(!showCreateForm);
  };

  const createPromptMutation = async () => {
    try {
      const newPrompt: CreatePromptInput = {
        id: uuidv4(),
        title,
        content,
        authorEmail: profile?.email,
        type: 'prompt'
      };

      const response = await API.graphql(graphqlOperation(createPrompt, { input: newPrompt }));
      const createdPrompt = response.data.createPrompt;

      setPrompts([...prompts, createdPrompt]);
      setTitle('');
      setContent('');
      toggleForm();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error creating prompt:', error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    createPromptMutation();
  };


  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        setLoading(true);
        const response = await API.graphql(graphqlOperation(listPrompts));
        const promptData = response.data.listPrompts.items;
        setPrompts(promptData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching prompts:', error);
        setLoading(false);
      }
    };

    fetchPrompts();
  }, []);


  useEffect(() => {
    let filteredPrompts = prompts.filter((prompt) => prompt.authorEmail !== profile?.email);
    if (filteredPrompts.length > 0) {
      setLoading(true);
      const randomIndex = Math.floor(Math.random() * filteredPrompts.length);
      setRandomPrompt(filteredPrompts[randomIndex]);
      setLoading(false);
    }
  }, [prompts]);



  return (
    <Grid container spacing={2} sx={{ maxWidth: 1200 }}>
      <Grid item xs={8} my={2}>
        <Typography variant="h5">Take a prompt, leave a prompt <Chip label="BETA" /></Typography>
      </Grid>

      {showCreateForm ? (
        <Grid item xs={12} my={2}>
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={12} my={2}>
                <div>
                  <Typography variant="h6">Title:</Typography>
                  <TextField
                    id="title"
                    value={title}
                    onChange={handleTitleChange}
                    variant="outlined"
                    fullWidth
                  />
                </div>
                <div>
                  <Typography variant="h6">Content:</Typography>
                  <TextField
                    id="content"
                    value={content}
                    onChange={handleContentChange}
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                  />
                </div>
              </Grid>
              <Grid item xs={12}>

                <ButtonGroup>
                  <Button type="submit" variant="contained" color="primary">
                    Save
                  </Button>
                  <Button onClick={toggleForm} variant="outlined" color="primary">
                    Cancel
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </form>
        </Grid>
      ) : (
        <If condition={!loading} fallbackContent={<Loading />}>
          <Grid item xs={4} my={2}>
            <Button onClick={toggleForm} variant="contained" color="primary" sx={{ float: 'right' }}>
              Add
            </Button>
          </Grid>
          <Grid item xs={12}>
            {randomPrompt ? (
              <Card>
                <CardHeader
                  title={randomPrompt.title}
                  subtitle={getDisplayName(randomPrompt.author)}
                  avatar={
                    <LinkedMemberAvatar profile={randomPrompt.author}></LinkedMemberAvatar>
                  }
                />
                <CardContent>
                  <Typography variant="body1">{randomPrompt.content}</Typography>
                </CardContent>
              </Card>
            ) : (
              <Typography variant="body1">No prompts available.</Typography>
            )}
          </Grid>
        </If>
      )
      }
    </Grid >
  );
};

export default Prompts;
