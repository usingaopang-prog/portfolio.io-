{-# LANGUAGE OverloadedStrings #-}

import Web.Scotty
import Data.Aeson (object, (.=))

main :: IO ()
main = scotty 3000 $ do

    get "/api/profile" $ do
        json $ object
            [ "name" .= ("Opang.Jr Usinga" :: String)
            , "role" .= ("Web Developer")
            , "location" .= ("Bryanston, Sandton")
            ]

    get "/api/projects" $ do
        json
            [ object
                [ "title" .= ("Portfolio Website" :: String)
                , "category" .= ("web")
                , "description" .= ("A modern personal portfolio website")
                ]
            , object
                [ "title" .= ("JavaScript Project" :: String)
                , "category" .= ("javascript")
                , "description" .= ("An interactive JavaScript application")
                ]
            ]