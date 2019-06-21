# Vim Color Scheme

The default color scheme for ``vim`` is not very friendly for comments since it has a dark blue color. You can change the color scheme with the following steps:

1. Create an folder ``.vim`` in your home directory:

    ```bash
    mkdir ~/.vim
    ```

1. Checkout the github repository for color schemes:

    ```bash
    git clone https://github.com/flazz/vim-colorschemes.git ~/.vim
    ```

3. Create config file ``.vimrc`` in your home directory. The color scheme ``wombat`` is used in the example below.

    ```bash
    echo "colorscheme wombat" >> ~/.vimrc
    ```

If you do not like the color scheme ``wombat``, you can use any other color scheme you like. To find all color schemes available, run:

```bash
ls ~/.vim/colors
```

A simple count shows that there is `972` different color schemes available for you to choose.

```bash
$ ls -l ~/.vim/colors | wc -l
972
```
