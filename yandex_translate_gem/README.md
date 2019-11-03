Ruby Gem for Yandex Translate API

## Installation

Add this line to your application's Gemfile:

    gem 'yandex_translate'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install yandex_translate

## Usage

First, create translator using your api key:

```ruby
  require 'yandex_translate'
  translator = Yandex::Translator.new('your.key')
```

To get list of possible translation directions use #langs method:

```ruby
  translator.langs
  # => {"dirs"=>["ru-en", "en-ru", "..."]}

```

To determine language text use detect method:

```ruby
  translator.detect 'Hello, world!'
  # => {"code"=>200, "lang"=>"en"}
```
To translate text use translate method:

```ruby
  translator.translate 'Car', 'ru'
  # => {"code"=>200, "lang"=>"en-ru", "text"=>["Машина"]}
```

In this case Yandex automatically detect text language.
If you want to set text language manually add third parameter

```ruby
  translator.translate 'Car', 'en-pt'
  # => {"code"=>200, "lang"=>"en-pt", "text"=>["Carro"]}

```